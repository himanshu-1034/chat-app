import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { CSSProperties, ReactElement } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

type infoProps = {
    content: string | ReactElement,
    style?: CSSProperties
}

export default function InfoTooptip({ content, style }: infoProps): ReactElement {
    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                    <div style={{ padding: '10px' }}>
                        {content}
                    </div>
                </Tooltip>
            )}
        >
            <FontAwesomeIcon icon={faInfoCircle} style={style} />
        </OverlayTrigger>
    )
}