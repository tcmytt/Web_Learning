import clsx from 'clsx'
import styles from './Button.module.css'

function Button () {
    return (
        <>
            <Button className = {styles.btn}>Click Me</Button>
            <Button className = {clsx(styles.btn, styles.active)}>Click Me</Button>
        </>
    )
}