import { type FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import Modal from '../ui/Modal';

interface CookieFormValues {
  ageConfirmed: boolean;
  eulaAccepted: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const COOKIE_KEY = 'consent';

const CookieConsentModal: FC = () => {
  const [open, setOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const { control, handleSubmit, watch, setValue } = useForm<CookieFormValues>({
    defaultValues: {
      ageConfirmed: false,
      eulaAccepted: false,
      analytics: false,
      marketing: false,
      functional: false,
    },
  });

  const ageConfirmed = watch('ageConfirmed');
  const eulaAccepted = watch('eulaAccepted');

  useEffect(() => {
    const saved = Cookies.get(COOKIE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as CookieFormValues;
        Object.keys(parsed).forEach((keyString) => {
          const key = keyString as keyof CookieFormValues;
          setValue(key, parsed[key]);
        });
        setOpen(false);
      } catch (err) {
        console.warn('Failed to parse cookieConsent:', err);
        setOpen(true);
      }
    } else {
      setOpen(true);
    }
  }, [setValue]);

  const onSubmit = (data: CookieFormValues) => {
    Cookies.set(COOKIE_KEY, JSON.stringify(data), { expires: 365 });
    setOpen(false);
  };

  const handleAccept = () => {
    void handleSubmit(onSubmit)();
  };

  const handleAcceptAll = () => {
    setValue('analytics', true);
    setValue('marketing', true);
    setValue('functional', true);
    void handleSubmit(onSubmit)();
  };

  const handleRejectNonEssential = () => {
    setValue('analytics', false);
    setValue('marketing', false);
    setValue('functional', false);
    void handleSubmit(onSubmit)();
  };

  const canProceed = ageConfirmed && eulaAccepted;

  const EULA_URL = (import.meta.env.VITE_EULA_URL as string) || '#';
  const PRIVACY_URL = (import.meta.env.VITE_PRIVACY_URL as string) || '#';

  return (
    <Modal open={open} onClose={canProceed ? void handleSubmit(onSubmit) : undefined}>
      <Modal.Backdrop onClick={canProceed ? void handleSubmit(onSubmit) : undefined} />

      <Modal.Panel>
        <Modal.Header>Cookie & Privacy Preferences</Modal.Header>

        <form onSubmit={void handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="space-y-2">
              <Controller
                name="ageConfirmed"
                control={control}
                render={({ field }) => (
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-indigo-500"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                    I confirm I am at least 16 years old
                  </label>
                )}
              />
              <Controller
                name="eulaAccepted"
                control={control}
                render={({ field }) => (
                  <label className="flex flex-wrap items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-indigo-500"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                    I agree to the{' '}
                    <a
                      href={EULA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-indigo-400"
                    >
                      End User License Agreement
                    </a>
                  </label>
                )}
              />
              {!canProceed && (
                <p className="text-red-400 text-sm">
                  You must confirm your age and accept the EULA to continue.
                </p>
              )}
            </div>
            <div className="pt-4 border-t border-neutral-700">
              <button
                type="button"
                className="text-indigo-400 underline text-sm mb-2"
                onClick={() => setShowPreferences((prev) => !prev)}
              >
                {showPreferences ? 'Hide Preferences' : 'Manage Preferences'}
              </button>

              {showPreferences && (
                <div className="space-y-2 ml-4">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked disabled className="accent-indigo-500" />
                    <span>Strictly Necessary Cookies (Always Active)</span>
                  </div>

                  <Controller
                    name="analytics"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-indigo-500"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          onBlur={field.onBlur}
                          ref={field.ref}
                        />
                        Analytics Cookies (Placeholder – Not Implemented)
                      </label>
                    )}
                  />
                  <Controller
                    name="marketing"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-indigo-500"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          onBlur={field.onBlur}
                          ref={field.ref}
                        />
                        Marketing Cookies (Placeholder – Not Implemented)
                      </label>
                    )}
                  />
                  <Controller
                    name="functional"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-indigo-500"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          onBlur={field.onBlur}
                          ref={field.ref}
                        />
                        Functional Cookies (Placeholder – Not Implemented)
                      </label>
                    )}
                  />
                  <p className="mt-2 text-sm text-gray-400">
                    Read our{' '}
                    <a
                      href={PRIVACY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-indigo-400"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 text-white px-4 py-2 rounded-md font-semibold transition"
              onClick={handleAccept}
              disabled={!canProceed}
            >
              Accept
            </button>
            <button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 text-white px-4 py-2 rounded-md font-semibold transition"
              onClick={handleAcceptAll}
              disabled={!canProceed}
            >
              Accept All
            </button>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white px-4 py-2 rounded-md font-semibold transition"
              onClick={handleRejectNonEssential}
              disabled={!canProceed}
            >
              Reject Non-Essential
            </button>
          </Modal.Footer>
        </form>
      </Modal.Panel>
    </Modal>
  );
};

export default CookieConsentModal;
