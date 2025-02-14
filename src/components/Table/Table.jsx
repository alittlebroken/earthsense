import './Table.css';

export const TableData = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "tableContainer ";
    classes ? styles += classes + " " : "";

    return (
        <section className={styles}>{children}</section>
    )

};

export const Table =(props) => {

    const {
        children,
        classes
    } = props;

    let styles = "table";
    classes ? styles += classes + " " : "";

    return (
            <table className={styles}>
                {children}
            </table>
    )
};

export const TableHeader = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "tableHeader";
    classes ? styles += classes + " " : "";

    return (
        <thead className={styles}>
            {children}
        </thead>
    )

};

export const TableHeaderRow = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "tableHeaderRow";
    classes ? styles += classes + " " : "";

    return (
        <tr className={styles}>
            {children}
        </tr>
    )

};

export const TableHeaderColumn = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "tableHeaderColumn";
    classes ? styles += classes + " " : "";

    return (
        <th className={styles}>
            {children}
        </th>
    )

};

export const TableBody = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "tableBody";
    classes ? styles += classes + " " : "";

    return (
        <tbody className={styles}>
            {children}
        </tbody>
    )

};

export const TableRow = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "tableRow";
    classes ? styles += classes + " " : "";

    return (
        <tr className={styles}>
            {children}
        </tr>
    )
};

export const TableColumn = (props) => {

    const {
        children,
        classes
    } = props;

    let styles = "tableColumn";
    classes ? styles += classes + " " : "";

    return (
        <td className={styles}>
            {children}
        </td>
    )

}