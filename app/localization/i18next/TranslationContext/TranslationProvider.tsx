import type {PropsWithChildren} from 'react';
import React, {useState, useEffect} from 'react';

import i18nextClient from '../init';
import {TranslationContext} from './TranslationContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export const TranslationProvider = (props: PropsWithChildren<Props>) => {
  const [isReady, setIsReady] = useState(false);
  const {children} = props;
  useEffect(() => {
    const bootstrap = async () => {
      // TODO get lang from 'expo-localization' and pass lang here
      await i18nextClient.changeLanguage('en');
    };
    bootstrap().then(() => {
      setIsReady(true);
    });
  }, []);

  return isReady ? (
    <TranslationContext.Provider value={i18nextClient}>
      {children}
    </TranslationContext.Provider>
  ) : null;
};
