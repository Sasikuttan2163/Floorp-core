/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { CustomShortcutKey } from "../components/custom-shortcut-key";
import { initStatusbar } from "./statusbar";
import { initBrowserContextMenu } from "./context-menu";
import { initPrivateContainer } from "./browser-private-container";
import { initShareMode } from "./browser-share-mode";

CustomShortcutKey.getInstance();

window.SessionStore.promiseInitialized.then(() => {
  initBrowserContextMenu();
  initPrivateContainer();
  initShareMode();
  initStatusbar();
});
