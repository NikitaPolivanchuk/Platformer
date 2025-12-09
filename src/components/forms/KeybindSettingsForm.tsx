import { Controller, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import KeyInput from '../ui/KeyInput.tsx';
import { useEffect } from 'react';
import { type GameOptions, useGameOptions } from '../../store/gameOptions.ts';
import { gameOptionsSchema } from '../../schemas/gameOptionsSchema.ts';

const KeybindSettingsForm = () => {
  const { options, setOptions } = useGameOptions();
  const {
    control,
    formState: { errors },
    trigger,
  } = useForm<GameOptions>({
    resolver: zodResolver(gameOptionsSchema),
    defaultValues: options,
  });

  const watchedOptions = useWatch({ control });

  useEffect(() => {
    void trigger('keybinds');
  }, [trigger, watchedOptions.keybinds]);

  useEffect(() => {
    const validation = gameOptionsSchema.safeParse(watchedOptions);
    if (validation.success) {
      setOptions(validation.data);
    }
  }, [watchedOptions, setOptions]);

  return (
    <form>
      <h2 className="text-xl font-semibold mb-4">Keybinds</h2>

      {Object.keys(options.keybinds).map((actionStr) => {
        const action = actionStr as keyof GameOptions['keybinds'];
        const fieldError = errors.keybinds?.[action];

        return (
          <div key={action} className="mb-4">
            <label className="flex items-center gap-4">
              <span className="w-32 capitalize text-gray-300">{action}:</span>

              <Controller
                name={`keybinds.${action}`}
                control={control}
                render={({ field }) => <KeyInput value={field.value} onChange={field.onChange} />}
              />
            </label>

            {fieldError && <p className="text-red-500 text-sm mt-1 ml-32">{fieldError.message}</p>}
          </div>
        );
      })}

      {errors.keybinds?.message && (
        <p className="text-red-500 text-sm mt-2">{errors.keybinds.message}</p>
      )}
    </form>
  );
};

export default KeybindSettingsForm;
