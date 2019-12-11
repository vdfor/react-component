import React, {
  memo, PropsWithChildren, useState, useEffect, useContext,
} from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components/macro';
import { ConfigContent } from '../ConfigProvider';
import { pxTransform } from '../util';

interface IProps {
  visible: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
}

const zoomInKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
`;

const zoomOutKeyFrame = keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;

const WrapperView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1024;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CurtainView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  animation: ${({ cut }: { cut?: string }) => (cut && (cut === 'enter' ? zoomInKeyFrame : zoomOutKeyFrame)) || ''} 300ms both;
`;

const ContentView = styled.div`
  width: ${({ base }: {base: number}) => pxTransform(265, base)};;
  min-height: 50px;
  max-height: ${({ base }: {base: number}) => pxTransform(450, base)};;
  overflow-y: auto;
  border-radius: 6px;
  background: #fff;
`;

const CloseView = styled.div`
  margin-top: 13px;
  width: 25px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 500rem;
  position: relative;

  ::before, ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 15px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
  }

  ::before {
    transform: translate3d(-50%,-50%,0) rotate(45deg);
  }

  ::after {
    transform: translate3d(-50%,-50%,0) rotate(-45deg);
  }
`;

const MaskView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.6);
`;

const Portal = memo(({ children, visible }: PropsWithChildren<{ visible: boolean }>) => (visible ? createPortal(children, document.body) : null));

export default memo(({
  visible, children, maskClosable = true, onClose,
}: PropsWithChildren<IProps>) => {
  const [cut, setCut] = useState('');
  const { baseFontSize } = useContext(ConfigContent);
  const baseProps = { base: baseFontSize };

  const selfOnClose = () => {
    if (onClose) {
      setCut('leave');
      const timer = setTimeout(() => {
        clearTimeout(timer);
        onClose();
      }, 300);
    }
  };

  const onMaskClick = () => {
    if (maskClosable) {
      selfOnClose();
    }
  };

  useEffect(() => {
    if (visible) {
      setCut('enter');
    }
    return () => {
      setCut('');
    };
  }, [visible]);

  return (
    <Portal visible={visible}>
      <WrapperView>
        <CurtainView cut={cut}>
          <ContentView {...baseProps}>{children}</ContentView>
          <CloseView onClick={selfOnClose} />
        </CurtainView>
        <MaskView onClick={onMaskClick} />
      </WrapperView>
    </Portal>
  );
});
