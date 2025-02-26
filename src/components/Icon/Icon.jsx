import './Icon.css';

export const Icon = (props) => {

    const {
        name,
        classes,
        lg
    } = props;

    let styles = "material-symbols-outlined ";
    classes ? styles += classes + " " : "";
    lg ? styles += "icon-large " : ""

    return (
        <span className={styles}>{name}</span>
    )

};