import {FC} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";
import {IStyledNavLink} from "./inteface";
import styles from './styles.module.scss'

export const StyledNavLink: FC<IStyledNavLink> = ({to, variant, text, dataTestId}) => (
    <Link data-testid={dataTestId} to={to} className={classNames(styles.link, {[styles.link__outlined]: variant === 'outlined'}, {[styles.link__colored]: variant === 'colored'})}>{text}</Link>
)