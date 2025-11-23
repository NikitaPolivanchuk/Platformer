import { type FC, useEffect } from 'react';
import useGameOptions from '../../game/contexts/GameOptions/useGameOptions.ts';
import { useForm, useWatch } from 'react-hook-form';
import {
  type GameOptions,
  gameOptionsSchema,
} from '../../game/contexts/GameOptions/GameOptions.ts';
import { zodResolver } from '@hookform/resolvers/zod';

const VariableSettingsForm: FC = () => {
  const { options, setOptions } = useGameOptions();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameOptions>({
    resolver: zodResolver(gameOptionsSchema),
    defaultValues: options,
    mode: 'onChange',
  });
  const watchedValues = useWatch({ control });

  useEffect(() => {
    const validation = gameOptionsSchema.safeParse(watchedValues);
    if (validation.success) {
      setOptions(validation.data);
    }
  }, [setOptions, watchedValues]);

  return (
    <form onSubmit={(e) => void handleSubmit(() => setOptions(options))(e)}>
      <h2>Variables</h2>
      {Object.keys(options.variables).map((variableStr) => {
        const variable = variableStr as keyof GameOptions['variables'];
        return (
          <div key={variable}>
            <label>
              <span
                style={{
                  marginRight: '8px',
                  width: '80px',
                  display: 'inline-block',
                  textTransform: 'capitalize',
                }}
              >
                {variable}:
              </span>
              <input
                {...register(`variables.${variable}`, { valueAsNumber: true })}
                type="number"
              />
            </label>

            {errors.variables?.[variable] && (
              <p style={{ color: 'red' }}>{errors.variables[variable]?.message}</p>
            )}
          </div>
        );
      })}
    </form>
  );
};

export default VariableSettingsForm;
