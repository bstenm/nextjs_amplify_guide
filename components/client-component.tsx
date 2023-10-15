'use client';

import { useTranslation } from 'react-i18next';

export default function ClientComponent(): JSX.Element {
    const { t } = useTranslation();

    return <div className="opacity-50">{t('leftHandPractice')}</div>;
}
