
import './SideMenu.css'

export const SideMenu = (props) => {

    const { 
        children,
        classes
    } = props;

    let styles = "sideMenuContainer ";
    classes ? styles += classes + " " : "";    

    return (
        <aside className={styles}>
            {children}
        </aside>
    )

};

export const SideMenuBrand = (props) => {
  
    const {
        children,
        classes,
    } = props;

    let styles = "";
    classes ? styles += classes + " " : "";

    return (
        <section className={styles}>
            {children}
        </section>
    )

};

export const SideMenuTitle = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "";
    classes ? styles += classes + " " : "";

    return (
        <span className={styles}>
            {children}
        </span>
    )

};

export const SideMenuList = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "list-style-none gap-2 flex flex-col";
    classes ? styles += classes + " " : "";

    return (
        <ul className={styles}>
            {children}
        </ul>
    )

};

export const SideMenuListItem = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "flex flex-align-center gap-2";
    classes ? styles += classes + " " : "";

    return (
        <li className={styles}>{children}</li>
    )

};

export const SideMenuFooter = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "pad-1 padb-2 flex flex-align-end";
    classes ? styles += classes + " " : "";

    return (
        <section className={styles}>{children}</section>
    )

};