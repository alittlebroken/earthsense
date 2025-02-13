import './Card.css';

export const Card =(props) => {

    const { 
        children,
        primary,
        secondary,
        tertiary,
        classes,
        landscape
    } = props;

    let styles = "card ";
    primary ? styles += "cardBgPrimary " : "";
    secondary ? styles += "cardBgSecondary " : "";
    tertiary ? styles += "cardBgTertiary " : "";
    landscape ? styles += "cardLandscape " : "";
    classes ? styles += classes + " " : "";

    return (
        <div className={styles}>{children}</div>
    )
};

export const CardHeader = ({children}) => {

    return (
        <div className="cardHeader">{children}</div>
    )
};

export const CardTitle = (props) => {

    const {
        children,
        md,
        lg
    } = props;

    let styles = "cardTitle ";
    md ? styles += "cardTitle-md " : "";
    lg ? styles += "cardTitle-lg " : "";

    return (
        <span className={styles}>{children}</span>
    )
};

export const CardTitleDescription = ({children}) => {

    return (
        <span className="CardTitleDescription">{children}</span>
    )
};

export const CardBody = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "cardBody ";
    classes ? styles += classes + " " : "";
   

    return (
        <div className={styles}>{children}</div>
    )
};

export const CardFooter = ({children}) => {

    return (
        <div className="cardFooter">{children}</div>
    )
};

export const CardImage = (props) => {

    const {
        url,
        title,
        alt,
        children,
        sm,
        md,
        lg,
        classes
    } = props;

    let styles = "cardImage ";
    sm ? styles += "cardImageSmall " : "";
    md ? styles += "cardImageMedium " : "";
    lg ? styles += "cardImageLarge" : "";
    classes ? styles += classes + " " : "";

    return (
        <>
            <img className={styles} src={url} title={title} alt={alt} />
            {children}
        </>
    )
};

export const CardOverLay = (props) => {

    const {
        children,
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
        center
    } = props;

    let styles = "cardOverlay ";
    topLeft ? styles += "cardOverlayTopLeft " : "";
    topRight ? styles += "cardOverlayTopRight " : "";
    bottomLeft ? styles += "cardOverlayBottomLeft " : "";
    bottomRight ? styles += "cardOverlayBottomRight " : "";
    center ? styles += "cardOverlayCenter " : "";

    return (
        <div className={styles}>{children}</div>
    )

}