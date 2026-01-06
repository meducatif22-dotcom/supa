const { data, error } = await supabase
  .from("client")
  .insert([
    { nom, mail, adresse, message }
  ])
  .select();

console.log("DATA :", data);
console.log("ERROR :", error);

if (error) {
  alert("Erreur Supabase : " + error.message);
  return;
}

// ✅ Redirection seulement si succès
window.location.href = "page2.html";
