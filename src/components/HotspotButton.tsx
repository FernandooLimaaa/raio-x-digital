interface Props {
  num: number;
  top: string;
  left: string;
  hotspotKey: string;
  label: string;
  active: boolean;
  onPress: (key: string) => void;
}

export default function HotspotButton({ num, top, left, hotspotKey, label, active, onPress }: Props) {
  return (
    <button
      onClick={() => onPress(hotspotKey)}
      aria-pressed={active}
      aria-label={label}
      style={{
        position: 'absolute',
        top,
        left,
        transform: 'translate(-50%, -50%)',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: active ? 'var(--trust)' : 'var(--alert)',
        color: '#fff',
        border: '3px solid #fff',
        fontSize: '18px',
        fontWeight: 800,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        transition: 'background 0.15s',
        fontFamily: 'var(--font-body)',
        padding: 0,
        zIndex: 2,
      }}
    >
      {num}
    </button>
  );
}
