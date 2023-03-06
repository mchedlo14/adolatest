import classes from './Section.module.css';

export default function Section(props) {
    return (
        <div className={classes.hero}>
            <h3 className={classes.header}>{props.header.toUpperCase()}</h3>
            {props.data.map((item) => (
                <div className={classes.content}>
                    <p className={classes.name}>
                        {item.name}
                    </p>
                    <span className={classes.number}>
                        {item.value}
                    </span>
                </div>
            ))}
        </div>
    )
}