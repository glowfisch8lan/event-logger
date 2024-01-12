ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

# If the first argument is "run"...
# use the rest as arguments for "run"
RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
# ...and turn them into do-nothing targets
$(eval $(RUN_ARGS):;@:)

migration/db/create:
	node node_modules/db-migrate/bin/db-migrate -e db db:create $(RUN_ARGS)

migration/create:
	node node_modules/db-migrate/bin/db-migrate -e db --migrations-dir ./src/migrations create $(RUN_ARGS);

migration/up:
	node node_modules/db-migrate/bin/db-migrate -e db --migrations-dir ./src/migrations up -v;

migration/refresh:
	node node_modules/db-migrate/bin/db-migrate -e db --migrations-dir ./src/migrations reset -v;
	make migration/up;

configure:
	export SERVER_PATH=$(ROOT_DIR); \
	$(ROOT_DIR)/configure.sh
