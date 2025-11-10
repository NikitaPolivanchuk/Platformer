import { type FC, useEffect } from 'react';
import useGameOptions from '../../game/contexts/GameOptions/useGameOptions.ts';
import { useForm, useWatch } from 'react-hook-form';
import {
  type GameOptions,
  gameOptionsSchema,
} from '../../game/contexts/GameOptions/GameOptions.ts';
import { zodResolver } from '@hookform/resolvers/zod';

const GeneralSettingsForm: FC = () => {
  const { options, setOptions } = useGameOptions();
  const {
    register,
    control,
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
      <h2>General</h2>
      <div>
        <label>
          <span
            style={{
              display: 'inline-block',
              width: '80px',
              marginRight: '8px',
            }}
          >
            Lives:
          </span>
          <input {...register('general.lives', { valueAsNumber: true })} />
          {errors.general?.lives && <p style={{ color: 'red' }}>{errors.general.lives.message}</p>}
        </label>
      </div>
    </form>
  );
};

export default GeneralSettingsForm;
