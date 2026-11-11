import { useEffect, useState } from 'react';

interface Props {
  text: string;
  label?: string;
}

export default function SpeakButton({ text, label = 'Ouvir dica' }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
  }, [supported, text]);

  function toggleSpeech() {
    if (!supported) return;

    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.88;
    utterance.pitch = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  if (!supported) return null;

  return (
    <button
      type="button"
      className="speak-button"
      aria-pressed={speaking}
      onClick={toggleSpeech}
    >
      <span className="speak-button-mark" aria-hidden="true">{speaking ? '■' : '▶'}</span>
      {speaking ? 'Parar leitura' : label}
    </button>
  );
}
