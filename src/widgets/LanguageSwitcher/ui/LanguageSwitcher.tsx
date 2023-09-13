import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    };
    return (
        <div className={classNames(styles.LanguageSwitcher, [className])}>
            <Button onClick={toggleLanguage} theme={ThemeButton.MAIN}>{t`toggleLang`}</Button>
        </div>
    );
};
