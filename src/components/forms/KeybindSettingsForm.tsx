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
    reset,
    trigger,
  } = useForm<GameOptions>({
    resolver: zodResolver(gameOptionsSchema),
    defaultValues: options,
    mode: 'onChange',
  });
  const watchedOptions = useWatch({ control });

  useEffect(() => {
    reset(options);
  }, [options, reset]);

  useEffect(() => {
    const validation = gameOptionsSchema.safeParse(watchedOptions);
    if (validation.success) {
      setOptions(validation.data);
    }
    void trigger('keybinds');
  }, [setOptions, trigger, watchedOptions]);

  return (
    <form>
      <h2>Keybinds</h2>

      {Object.keys(options.keybinds).map((actionStr) => {
        const action = actionStr as keyof GameOptions['keybinds'];
        const fieldError = errors.keybinds?.[action];

        return (
          <div key={action} style={{ marginBottom: '0.5rem' }}>
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
