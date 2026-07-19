.PHONY: build up up-build down logs restart clean

# ─────────────────────────────────────────────────────────────
# Build the Docker image
# ─────────────────────────────────────────────────────────────
build:
	docker compose --env-file .env build

# ─────────────────────────────────────────────────────────────
# Start services (no rebuild)
# ─────────────────────────────────────────────────────────────
up:
	docker compose --env-file .env down
	docker compose --env-file .env up -d

# ─────────────────────────────────────────────────────────────
# Rebuild and start services
# ─────────────────────────────────────────────────────────────
up-build:
	docker compose --env-file .env down
	docker compose --env-file .env up -d --build

# ─────────────────────────────────────────────────────────────
# Stop all services
# ─────────────────────────────────────────────────────────────
down:
	docker compose --env-file .env down

# ─────────────────────────────────────────────────────────────
# Tail logs for the app container
# ─────────────────────────────────────────────────────────────
logs:
	docker compose --env-file .env logs -f app

# ─────────────────────────────────────────────────────────────
# Restart only the app container
# ─────────────────────────────────────────────────────────────
restart:
	docker compose --env-file .env restart app

# ─────────────────────────────────────────────────────────────
# Remove everything: containers, volumes, and images
# ─────────────────────────────────────────────────────────────
clean:
	docker compose --env-file .env down -v --rmi all
