import styled from 'styled-components'

import { NonDraggableImage } from '../common/styledComponents'

export const RouletteContainer = styled.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`

export const RotationContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.started-spinning {
    animation: spin ${({ startSpinningTime }) => startSpinningTime / 1000}s
        cubic-bezier(0.77, -0.34, 0.96, 0.9) 0s 1 normal forwards running,
      continueSpin 0.75s linear
        ${({ startSpinningTime }) => startSpinningTime / 1000}s 4 normal
        forwards running,
      stopSpin ${({ stopSpinningTime }) => stopSpinningTime / 1000}s
        cubic-bezier(0, 0, 0.25, 1.02)
        ${({ startSpinningTime, continueSpinningTime }) =>
          (startSpinningTime + continueSpinningTime) / 1000}s
        1 normal forwards running;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes continueSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes stopSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(${(props) => 1440 + props.finalRotationDegrees}deg);
    }
  }
`

export const RouletteSelectorImage = styled(NonDraggableImage)`
  position: absolute;
  z-index: 5;
  width: 17%;
  right: 6px;
  top: 15px;
`
