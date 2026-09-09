import styles from './TargetRing.module.css'
import {type Target } from '../types'

type TargetRingProps = {
    target: Target

}

export default function TargetRing({ target }: TargetRingProps) {

    return (
        <div className={styles.ring} style={{left: target.left + '%', top: target.top + '%'}}>
            
        </div>
    )
}