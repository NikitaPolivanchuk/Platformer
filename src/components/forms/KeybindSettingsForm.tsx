import useGameOptions from '../../game/contexts/GameOptions/useGameOptions.ts';
import { Controller, useForm, useWatch } from 'react-hook-form';
import {
  type GameOptions,
  gameOptionsSchema,
} from '../../game/contexts/GameOptions/GameOptions.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import KeyInput from '../inputs/KeyInput.tsx';
import { useEffect } from 'react';

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
  }, [setOptions, watchedOptions]);

  return (
    <form>
      <h2>Keybinds</h2>

      {Object.keys(options.keybinds).map((actionStr) => {
        const action = actionStr as keyof GameOptions['keybinds'];
        const fieldError = errors.keybinds?.[action];

        return (
          <div key={`${action}-${errors.keybinds?.message}`} style={{ marginBottom: '0.5rem' }}>
            <label>
              <span
                style={{
                  marginRight: '8px',
                  width: '80px',
                  display: 'inline-block',
                  textTransform: 'capitalize',
                }}
              >
                {action}:
              </span>
              <Controller
                name={`keybinds.${action}`}
                control={control}
                render={({ field }) => <KeyInput value={field.value} onChange={field.onChange} />}
              />
            </label>
            {fieldError && (
              <p style={{ color: 'red', margin: '0.25rem 0 0 88px' }}>{fieldError.message}</p>
            )}
          </div>
        );
      })}
      {errors.keybinds?.message && <p style={{ color: 'red' }}>{errors.keybinds.message}</p>}
    </form>
  );
};

export default KeybindSettingsForm;
