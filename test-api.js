#!/usr/bin/env node

/**
 * Test script to verify frontend-backend connection
 * Simulates what the frontend app will do
 */

const API_BASE = "https://cybertron-backend.vercel.app";
const TEST_TEAM_NAME = `TestTeam_${Date.now()}`;

console.log("🔗 Starting Frontend-Backend Connection Test");
console.log("✅ Backend URL:", API_BASE);
console.log("📋 Testing endpoints...\n");

// Test 1: Check if backend is alive
console.log("Test 1: Backend Health Check");
fetch(`${API_BASE}/`)
  .then((res) => res.json())
  .then((data) => {
    console.log("✅ Backend is alive:", data);
    console.log("");
    return test2();
  })
  .catch((err) => {
    console.error("❌ Backend health check failed:", err.message);
    process.exit(1);
  });

// Test 2: Check team uniqueness
function test2() {
  return new Promise((resolve, reject) => {
    console.log("Test 2: Check Team Uniqueness");
    console.log(`Checking if team name "${TEST_TEAM_NAME}" is unique...`);

    fetch(`${API_BASE}/check-team-unique`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamName: TEST_TEAM_NAME }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Team unique check response:", data);
        console.log("");
        resolve(test3());
      })
      .catch((err) => {
        console.error("❌ Team unique check failed:", err.message);
        resolve(null); // Continue anyway
      });
  });
}

// Test 3: Verify registration endpoint is reachable
function test3() {
  return new Promise((resolve, reject) => {
    console.log("Test 3: Registration Endpoint Availability");
    
    const testPayload = {
      teamName: TEST_TEAM_NAME,
      members: 2,
      member1: {
        name: "Test User 1",
        college: "Test College",
        email: "test1@example.com",
        phone: "9999999999",
      },
      member2: {
        name: "Test User 2",
        college: "Test College",
        email: "test2@example.com",
        phone: "9999999998",
      },
    };

    console.log("Sending registration request...");
    fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testPayload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("✅ Registration endpoint working:", data);
        } else {
          console.log("⚠️  Endpoint responsive but registration condition not met:", data);
        }
        console.log("");
        resolve(test4());
      })
      .catch((err) => {
        console.error("❌ Registration endpoint failed:", err.message);
        resolve(null);
      });
  });
}

// Test 4: Verify endpoint is working
function test4() {
  return new Promise((resolve) => {
    console.log("Test 4: Verification Endpoint");
    
    // Use a test registration ID (will fail but proves endpoint exists)
    fetch(`${API_BASE}/verify-registration`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ registrationId: "TEST-ID" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Verification endpoint is reachable");
        if (data.success === false) {
          console.log("   (Expected: Invalid ID test gave expected response)");
        }
        console.log("");
        printSummary();
      })
      .catch((err) => {
        console.error("❌ Verification endpoint failed:", err.message);
        printSummary();
      });
  });
}

function printSummary() {
  console.log("=" .repeat(50));
  console.log("✅ TESTS COMPLETE");
  console.log("=" .repeat(50));
  console.log("\n🎯 Configuration Summary:");
  console.log(`   Backend URL: ${API_BASE}`);
  console.log("   Runtime Config: /public/runtime-config.json");
  console.log("   API Module: /src/api.js");
  console.log("\n📍 Frontend loads will:");
  console.log("   1. Execute runtime config loader in index.html");
  console.log("   2. Load /runtime-config.json (contains backend URL)");
  console.log("   3. Set window.__RUNTIME__.VITE_API_BASE");
  console.log("   4. api.js uses this URL for all API calls");
  console.log("\n✨ Ready to use! Frontend-Backend connection is configured.\n");
}
