"use client";
import { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

interface FormState {
  loading: boolean;
  sucesso: boolean;
  erro: string | null;
}

interface ContatoProps {
  onClose?: () => void;
}

const Contato = ({ onClose }: ContatoProps) => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [state, setState] = useState<FormState>({
    loading: false,
    sucesso: false,
    erro: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState({ loading: true, sucesso: false, erro: null });

    try {
      const response = await fetch("https://formspree.io/f/xpqopwpp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.nome,
          email: formData.email,
          message: formData.mensagem,
        }),
      });

      if (response.ok) {
        setState({ loading: false, sucesso: true, erro: null });
        setFormData({ nome: "", email: "", mensagem: "" });

        // Fechar modal após 2 segundos
        if (onClose) {
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      } else {
        setState({
          loading: false,
          sucesso: false,
          erro: "Erro ao enviar. Tente novamente.",
        });
      }
    } catch (error) {
      setState({
        loading: false,
        sucesso: false,
        erro: "Erro de conexão. Verifique sua internet.",
      });
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-mono mb-2">
          <span className="text-blue-400">const</span>{" "}
          <span className="text-yellow-300">contato</span>
          <span className="text-gray-400"> = </span>
          <span className="text-teal-400">() =&gt;</span>
          <span className="text-gray-400"> {}</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm">
          Mande uma mensagem. Vou responder o quanto antes.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
          {/* Sucesso Message */}
          {state.sucesso && (
            <div className="bg-teal-900 border border-teal-400 rounded p-4 flex items-start gap-3">
              <span className="text-teal-400 text-lg">✓</span>
              <div>
                <p className="text-teal-300 font-mono text-sm">
                  Mensagem enviada com sucesso!
                </p>
                <p className="text-teal-200 text-xs mt-1 font-sans">
                  Obrigado por entrar em contato. Responderei em breve.
                </p>
              </div>
            </div>
          )}

          {/* Erro Message */}
          {state.erro && (
            <div className="bg-red-900 border border-red-400 rounded p-4 flex items-start gap-3">
              <span className="text-red-400 text-lg">✕</span>
              <div>
                <p className="text-red-300 font-mono text-sm">{state.erro}</p>
              </div>
            </div>
          )}

          {/* Nome Field */}
          <div>
            <label htmlFor="nome" className="text-gray-400 font-mono text-sm">
              <span className="text-gray-500">// </span>
              <span className="text-blue-400">nome</span>
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              className="w-full mt-2 bg-gray-900 border border-gray-700 rounded px-4 py-2.5 text-gray-200 placeholder-gray-600 font-sans focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-gray-400 font-mono text-sm">
              <span className="text-gray-500">// </span>
              <span className="text-blue-400">email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              className="w-full mt-2 bg-gray-900 border border-gray-700 rounded px-4 py-2.5 text-gray-200 placeholder-gray-600 font-sans focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
            />
          </div>

          {/* Mensagem Field */}
          <div>
            <label
              htmlFor="mensagem"
              className="text-gray-400 font-mono text-sm"
            >
              <span className="text-gray-500">// </span>
              <span className="text-blue-400">mensagem</span>
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              placeholder="Sua mensagem aqui..."
              rows={6}
              className="w-full mt-2 bg-gray-900 border border-gray-700 rounded px-4 py-2.5 text-gray-200 placeholder-gray-600 font-sans focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-blue-100 font-mono font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2"
          >
            {state.loading ? (
              <>
                <span className="inline-block animate-spin">⟳</span>
                <span>await</span> <span className="text-yellow-300">submit</span>
                <span>...</span>
              </>
            ) : (
              <>
                <span className="text-yellow-300">submit</span>
                <span>()</span>
              </>
            )}
          </button>

          {/* Helper text */}
          <p className="text-gray-500 font-mono text-xs text-center">
            <span className="text-gray-600">// </span>
            -- Obrigado --
          </p>
        </form>
    </div>
  );
};

export default Contato;
