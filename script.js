 let count = 1;

    // DOM references
    const countEl = document.getElementById('countValue');
    const errorEl = document.getElementById('errorMsg');
    const incBtn = document.getElementById('incrementBtn');
    const decBtn = document.getElementById('decrementBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Update UI helper
    function updateUI() {
      countEl.textContent = count;
      // hide error by default
      errorEl.style.visibility = 'hidden';

      // hide clear button when count is 0
      if (count === 0) {
        clearBtn.classList.add('hidden');
      } else {
        clearBtn.classList.remove('hidden');
      }
    }

    // Increment handler
    incBtn.addEventListener('click', () => {
      count += 1;
      updateUI();
    });

    // Decrement handler
    decBtn.addEventListener('click', () => {
      if (count === 0) {
        // show error (red) but do not decrement below 0
        errorEl.style.visibility = 'visible';
        return;
      }
      count -= 1;
      updateUI();
    });

    // Clear handler
    clearBtn.addEventListener('click', () => {
      count = 0;
      updateUI();
    });

    // Initialise (honours initial count = 1, will hide clear if zero)
    updateUI();