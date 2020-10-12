export const useLocalStorage = () => {
  const handleSave = (startupInfo) => { 

    const startups = localStorage.getItem("startups") ?? []; 

    const parsedStartups = typeof startups == "string" ? JSON.parse(startups) : startups

    parsedStartups.push(startupInfo)

    const stringifiedStartup = JSON.stringify(parsedStartups)

    localStorage.setItem("startups", stringifiedStartup)
    console.log(stringifiedStartup)

  };

  const getStartups = localStorage.getItem("startups") ?? "[]"
  const parsedStartups = JSON.parse(getStartups)

  return [parsedStartups, handleSave]
}