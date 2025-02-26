import './Collapsable.css';

export const Collapsable = (props) => {

    const {
        children,
        classes,
        collapse
    } = props;

    let styles = "collapse ";
    classes ? styles += classes + " " :  "";
    collapse ? "collapse " : "";

    return (
        <div className={styles}>{children}</div>
    )

};