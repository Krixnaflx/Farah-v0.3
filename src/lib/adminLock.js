// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr



let adminLockEnabled = false;

function isAdminLockEnabled() {
  return adminLockEnabled;
}

function toggleAdminLock() {
  adminLockEnabled = !adminLockEnabled;
  return adminLockEnabled;
}

function setAdminLock(state) {
  adminLockEnabled = state;
  return adminLockEnabled;
}

module.exports = {
  isAdminLockEnabled,
  toggleAdminLock,
  setAdminLock
};

/**
 * Project: Farah
 * Author: Krixnaflx
 * Organization: Farah Development
 * GitHub: https://github.com/Krixnaflx
 * License: Custom
 * © 2026-30 Farah Development. All rights reserved.
 */