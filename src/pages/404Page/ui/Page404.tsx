import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './Page404.module.scss';

interface Page404Props {
    className?: string;
}
export const Page404 = ({ className }: Page404Props) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Page404, [className])}>
            {t('page_not_found')}
        </div>
    );
};
