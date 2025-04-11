.PHONY: lint lint-md lint-js lint-css

lint: lint-md lint-js lint-css
	@echo "✓ All linting checks passed"
lint-fix: lint-md lint-js lint-css
	@echo "✓ All linting checks passed"
	@echo "→ Fixing issues..."
	@npx remark . --quiet --frail --fix
	@npx eslint "**/**.js" --quiet --fix
	@npx stylelint "**/**.css" --quiet --fix

lint-md:
	@echo "→ Running markdown linter..."
	@npx remark . --quiet --frail

lint-js:
	@echo "→ Running JavaScript linter..."
	@npx eslint "**/**.js" --quiet

lint-css:
	@echo "→ Running style linter..."
	@npx stylelint "**/**.css" --quiet
