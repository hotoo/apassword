version = $(shell cat package.json | grep version | awk -F'"' '{print $$4}')

install:
	@spm install

build-doc: clean
	@spm doc build

publish-doc: build-doc
	@ghp-import _site
	@git push origin gh-pages
	@spm doc publish

build:
	@spm build

publish: publish-doc
	@spm publish
	@npm publish
	@git tag $(version)
	@git push origin $(version)

watch: clean
	@spm doc watch

clean:
	@rm -fr _site


runner = _site/tests/runner.html
test:
	@spm test

output = _site/coverage.html
coverage: build-doc
	@rm -fr _site/src-cov
	@jscoverage --encoding=utf8 src _site/src-cov
	@mocha-browser ${runner}?cov -S -R html-cov > ${output}
	@echo "Build coverage to ${output}"


.PHONY: build-doc publish-doc server clean test coverage
