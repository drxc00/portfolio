import { ImageResponse } from 'next/og'
import { IoMdCodeWorking } from "react-icons/io";
// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#F2E1D4',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38220f',
                    borderRadius: 15,
                    border: '1px solid #38220f',
                }}
            >
                <IoMdCodeWorking className='w-6 h-6'/>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}