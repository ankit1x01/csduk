import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    position: 'relative',
                }}
            >
                {/* Blue curve */}
                <div
                    style={{
                        position: 'absolute',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '3px solid #0066CC',
                        borderTop: 'none',
                        borderRight: 'none',
                        transform: 'rotate(135deg)',
                    }}
                />
                {/* Black curve */}
                <div
                    style={{
                        position: 'absolute',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '3px solid #000000',
                        borderBottom: 'none',
                        borderLeft: 'none',
                        transform: 'rotate(135deg)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
