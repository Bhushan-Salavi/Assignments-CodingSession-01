//L2-NestedObjecDestructuringforAPI.js
const user = {
    id: 123,
    profile: {
      name: "John Doe",
      address: {
        city: "Los Angeles",
        zipcode: "90001"
      }
    }
  };
  
  const { 
    id, 
    profile: { 
      name, 
      address: { 
        city, 
        zipcode 
      } = {} 
    } = {} 
  } = user;
  
  const cityText = city ?? "Information not available";
  const zipcodeText = zipcode ?? "Information not available";
  
  const result = `User ${name} (ID: ${id}) lives in ${cityText} (ZIP: ${zipcodeText})`;
  
  console.log(result);
  