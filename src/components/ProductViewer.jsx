import useMacbookStore from '../store/index.js';
import clsx from 'clsx';
import {Canvas} from '@react-three/fiber';
import StudioLights from './three/StudioLights.jsx';
import {useMediaQuery} from 'react-responsive';
import ModelSwitcher from './three/ModelSwitcher.jsx';

const ProductViewer = () => {
    const {color, scale, setColor} = useMacbookStore();
    const isMobile = useMediaQuery({query: '(max-width:1024px)'});
    return (
        <section id='product-viewer'>
            <h2>Take a closer look.</h2>
            <div className='controls'>
                {/*<p className='info'>Macbook Pro | Available in 14" & 16" inSpace Gray & Dark colors</p>*/}
                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div onClick={() => setColor('#ADB5BD')}
                             className={clsx('bg-neutral-300', color === '#ADB5BD' && 'active')}/>
                        <div onClick={() => setColor('#2E2C2E')}
                             className={clsx('bg-neutral-900', color === '#2E2C2E' && 'active')}/>
                    </div>
                    <div className='size-control'>
                        <div>
                            <p>14"</p>
                        </div>
                        <div>
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>
            <Canvas id='canvas' camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights/>
                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile}/>
            </Canvas>
        </section>
    )
}
export default ProductViewer