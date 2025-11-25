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
  }, [watchedValues, setOptions]);

  return (
    <form onSubmit={(e) => void handleSubmit(() => setOptions(options))(e)}>
      <h2 className="text-xl font-semibold mb-2">Variables</h2>

      <p className="text-yellow-400 text-sm mb-4 bg-neutral-700 border border-neutral-600 p-2 rounded">
        Changing values may break the game or behave unpredictably.
      </p>

      {Object.keys(options.variables).map((variableStr) => {
        const variable = variableStr as keyof GameOptions['variables'];
        const fieldError = errors.variables?.[variable];

        return (
          <div key={variable} className="mb-4">
            <label className="flex items-center gap-4">
              <span className="w-32 capitalize text-gray-300">{variable}:</span>

              <input
                type="number"
                {...register(`variables.${variable}`, { valueAsNumber: true })}
                className={`
                  px-3 py-1 rounded-md bg-neutral-700 text-gray-100
                  border border-neutral-600 focus:border-blue-400
                  focus:outline-none w-36
                `}
              />
            </label>

            {fieldError && <p className="text-red-500 text-sm mt-1 ml-32">{fieldError.message}</p>}
          </div>
        );
      })}
    </form>
  );
};

export default VariableSettingsForm;
