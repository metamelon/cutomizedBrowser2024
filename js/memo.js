const memoSection = document.getElementById('memo-section');
const memo = document.getElementById('memo');
        const saveMemoButton = document.getElementById('save-memo');
        const memoStatus = document.getElementById('memo-status');
        const memoList = document.getElementById('memo-list');

        window.onload = function() {
            const savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
            savedMemos.forEach(memoContent => addMemoToList(memoContent));
        };

        saveMemoButton.addEventListener('click', function() {
            const memoContent = memo.value.trim();
            if (memoContent === "") {
                alert('Memo cannot be empty.');
                return;
            }
            addMemoToList(memoContent);
            saveMemoToLocalStorage(memoContent);
            memo.value = ''; 
            memoStatus.textContent = 'Memo saved!';
            setTimeout(() => memoStatus.textContent = '', 2000);
        });

        function addMemoToList(memoContent) {
            const li = document.createElement('li');
            li.textContent = memoContent;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.style.marginLeft = '10px';
            deleteButton.onclick = function() {
                li.remove();
                removeMemoFromLocalStorage(memoContent);
            };

            li.appendChild(deleteButton);
            memoList.appendChild(li);
        }

        function saveMemoToLocalStorage(memoContent) {
            const savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
            savedMemos.push(memoContent);
            localStorage.setItem('memos', JSON.stringify(savedMemos));
        }

        function removeMemoFromLocalStorage(memoContent) {
            let savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
            savedMemos = savedMemos.filter(memo => memo !== memoContent);
            localStorage.setItem('memos', JSON.stringify(savedMemos));
        }

memo.style.display = 'flex';
memo.style.width = '300px';
memo.style.height = '450px';
memoSection.style.textAlign = 'center';
memoSection.style.position = 'absolute';
memoSection.style.top = '400px';
memoSection.style.left = '200px';