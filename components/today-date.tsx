'use client';

import { capitalize } from 'lodash';
import { useTranslation } from 'react-i18next';

export default function TodayDate({ locale }: { locale: string }): JSX.Element {
    const { t } = useTranslation();

    const date = new Date(Date.now()).toLocaleDateString(locale);

    return (
        <div className="opacity-50">
            At {capitalize(t('dateToday'))}: {date}
        </div>
    );
}
