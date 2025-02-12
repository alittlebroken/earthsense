import './Card.css';

export const Card =(props) => {

    const { 
        children,
        primary,
        secondary,
        tertiary,
        classes
    } = props;

    let styles = "card ";
    primary ? styles += "cardBgPrimary " : "";
    secondary ? styles += "cardBgSecondary " : "";
    tertiary ? styles += "cardBgTertiary " : "";
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

export const CardTitle = ({children}) => {

    return (
        <span className="cardTitle">{children}</span>
    )
};

export const CardTitleDescription = ({children}) => {

    return (
        <span className="CardTitleDescription">{children}</span>
    )
};

export const CardBody = ({children}) => {

    return (
        <div className="cardBody">{children}</div>
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
        children
    } = props;

    return (
        <>
            <img className="cardImage" src={url} title={title} alt={alt} />
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