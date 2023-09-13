import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PageLoaderProps {
    className?: string;
}
export const Loader = ({ className }: PageLoaderProps) => (
    <div className={classNames('lds-heart', [className])}>
        <div />
    </div>
);
