"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        let message = `Erreur serveur : ${res.status}`;
        try {
          const data = await res.json();
          if (data?.message) message = data.message;
        } catch (_) {}
        setError(message);
        setLoading(false);
        return;
      }

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setError((err as Error)?.message || "Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* TITRE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Contactez-nous</h2>
          <p className="text-gray-600 mt-2">
            Remplissez le formulaire ci-dessous et nous vous répondrons
            rapidement.
          </p>
        </div>

        {/* SUCCESS */}
        {success ? (
          <div className="bg-green-100 p-4 rounded-lg text-green-800 text-center">
            <h3 className="font-semibold">
              Votre message a bien été envoyé 🎉
            </h3>
            <Button
              className="mt-4"
              onClick={() => {
                setSuccess(false);
                setError(null);
              }}
            >
              Envoyer un autre message
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 bg-white p-8 rounded-xl shadow-md"
          >
            {/* ERROR */}
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* GRID 1/2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div className="grid gap-2">
                <Label>Nom complet</Label>
                <Input
                  value={form.name}
                  onChange={update("name")}
                  disabled={loading}
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  value={form.email}
                  onChange={update("email")}
                  disabled={loading}
                  placeholder="example@gmail.com"
                />
              </div>

              {/* Téléphone */}
              <div className="grid gap-2">
                <Label>Téléphone</Label>
                <Input
                  value={form.phone}
                  onChange={update("phone")}
                  disabled={loading}
                  placeholder="+213 555 12 34 56"
                />
              </div>

              {/* Entreprise */}
              <div className="grid gap-2">
                <Label>Entreprise</Label>
                <Input
                  value={form.company}
                  onChange={update("company")}
                  disabled={loading}
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            {/* MESSAGE sur 100% */}
            <div className="grid gap-2">
              <Label>Message</Label>
              <Textarea
                value={form.message}
                onChange={update("message")}
                disabled={loading}
                placeholder="Écrivez votre message ici..."
                className="h-32"
              />
            </div>

            {/* BOUTON */}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Envoi..." : "Envoyer"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
