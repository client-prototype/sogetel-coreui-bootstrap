/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template loading-buttons.js
 * License (https://coreui.io/pro/license/)
 * --------------------------------------------------------------------------
 */

for (const element of document.querySelectorAll('.btn-loading')) {
  // eslint-disable-next-line no-unused-vars
  const btn = new coreui.LoadingButton(element);
  element.addEventListener('click', event => {
    const myBtn = coreui.LoadingButton.getInstance(event.target);
    myBtn.start();
  });
}
//# sourceMappingURL=loading-buttons.js.map