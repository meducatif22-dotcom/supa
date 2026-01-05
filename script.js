import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://uxartdzzansqlvvbcaxc.supabase.co";
const supabaseKey = "TA_CLE_PUBLIQUE";
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("clientForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // empêche le rechargement de la page

  const nom = document.getElementById("nom").value;
  const mail = document.getElementById("mail").value;
  const adresse = document.getElementById("adresse").value;
  const message = document.getElementById("message").value;

  const { error } = await supabase
    .from("client")
    .insert([
      { nom, mail, adresse, message }
    ]);

  if (error) {
    console.error("Erreur Supabase :", error.message);
    alert("Erreur lors de l'envoi");
  } else {
    // ✅ Redirection si succès
    window.location.href = "page2.html";
  }
});
