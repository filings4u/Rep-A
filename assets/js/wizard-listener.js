document.addEventListener("DOMContentLoaded", () => {
  try {
    // 1. Parse string indicators out of checkout address bar lines
    const queryParams = new URLSearchParams(window.location.search);
    const passedState = queryParams.get("state");
    const passedForm = queryParams.get("form");

    if (!passedState) return;

    console.log(`[Wizard Tunnel] Intercepted configuration: State=${passedState}, Form=${passedForm}`);

    // 2. Select HTML input elements on your wizard landing screens
    const wizardStateSelect = document.getElementById("wizard-state-input") || document.querySelector('select[name="state"]');
    const wizardFormSelect = document.getElementById("wizard-form-input") || document.querySelector('select[name="entity_type"]');

    // 3. Auto-populate parameters natively on load execution
    if (wizardStateSelect) {
      wizardStateSelect.value = passedState.toUpperCase();
      // Fire native change events to activate child scripts running inside wizard blocks
      wizardStateSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }

    if (passedForm && wizardFormSelect) {
      wizardFormSelect.value = passedForm.toLowerCase();
      wizardFormSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }

  } catch (err) {
    console.error("Wizard address parser critical configuration error:", err);
  }
});
