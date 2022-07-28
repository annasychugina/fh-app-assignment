import type {i18n as I18n} from 'i18next';
import * as React from 'react';

const CTX = React.createContext<I18n | null>(null);
if (process.env.NODE_ENV !== 'production') {
  CTX.displayName = 'TranslationContext';
}

export const TranslationContext = CTX;
