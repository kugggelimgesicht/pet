import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import BurgerIcon from 'shared/assets/icons/burgerIcon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle} theme={ThemeButton.CLEAR}><BurgerIcon width="30px" height="30px" /></Button>

            <ThemeSwitcher />

        </div>
    );
};
