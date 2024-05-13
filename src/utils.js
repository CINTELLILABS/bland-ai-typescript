const fs = require("fs");
const { readConfig } = require("./config")

async function loadDSLFromFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    if (!fileContents) {
      console.error("File is empty");
      return null;
    }
    const res = await fetch("http://localhost:3000/parse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ dslString: fileContents }),
        });

    if (res.status !== 200) {
        console.error("Error parsing .bland file. \nError message - ", res.statusText);
        return null;
    }
    const parsedInfo = await res.json();

    // console.log("Parsed Info:", parsedInfo);
    return parsedInfo;
  } catch (err) {
    console.error(
      "Error parsing .bland file. \nError message - ",
      err.message
    );
    return null;
  }
}

async function updatePathway(pathway_id, nodes, edges, name, apiKey) {
  const res = await fetch(
    `http://localhost:3000/v1/convo_pathway/${pathway_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        name: name,
        nodes: nodes,
        edges: edges,
      }),
    }
  );

  const updateRes = await res.json();

  if (res.status !== 200) {
    console.error("Error updating pathway:", updateRes.message);
  } else {
    console.log("Pathway updated successfully!");
  }
}

async function callPathway(pathway_id) {

    const config = readConfig();

    if (!config.call_data) {
        console.error("Call data not found in config. Please ensure your .blandrc contains a valid 'call_data' entry.");
        return;
    }

    if (config.call_data.phone_number === undefined) {
        console.error("Phone number not found in call data. Please ensure your .blandrc call_data object contains a valid 'phone_number' entry.");
        return;
    }

    let payload = {
        pathway_id: pathway_id,
        phone_number: config.call_data?.phone_number,
    };

    if (config?.call_data) {
        payload = {
            ...payload,
            ...config.call_data,
        };
    }

    console.log("Call body", payload);

    console.log("apiKey", config.apiKey);

    const res = await fetch(
        `https://api.bland.ai/v1/calls`,
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: config.apiKey,
        },
        body: JSON.stringify(payload)
        }
    );
    console.log("Response from call :", await res.json());
    
    if (!res.ok) {
        console.error("Error calling pathway:", res.statusText);
    } else {
        console.log("Pathway called successfully!");
    }
}


module.exports = {
  loadDSLFromFile,
  updatePathway,
  callPathway
};
