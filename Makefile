format:
	npx prettier --write .
	poetry run jupyter nbconvert --inplace --to notebook --execute --allow-errors static/**/*.ipynb
	poetry run databooks meta --rm-outs --rm-exec --yes .
	poetry run nbqa isort .
	poetry run nbqa pyupgrade .
	poetry run black .
