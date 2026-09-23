async function processUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Catchphrase filter (dhoondega koi bhi matching company catchphrase)
    const filteredUsers = users.filter((user) => {
      const catchPhrase = user.company?.catchPhrase?.toLowerCase() || "";
      return (
        catchPhrase.includes("group") ||
        catchPhrase.includes("service") ||
        catchPhrase.includes("e-business") ||
        catchPhrase.includes("neural") ||
        catchPhrase.length > 0
      );
    });

    const formattedUsers = filteredUsers.map((user) => {
      const {
        name,
        email,
        address: { city },
        company: { catchPhrase },
      } = user;

      return `User: ${name} | Email: ${email} | City: ${city} | Company: ${catchPhrase}`;
    });

    console.log("Filtered & Formatted Users:\n");
    console.log(formattedUsers);
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

processUsers();