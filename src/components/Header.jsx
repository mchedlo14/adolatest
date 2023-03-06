import classes from './Header.module.css';
import mountain from '../assets/mountain.png'


export default function Header() {

    return (
        <>
            <div className={classes.header}>
                Wine Cup
            </div>
            <img src={mountain} className={classes.firstIcon} />
        </>
    );
}